import { ID, Query } from "appwrite";
import { INewPost, INewUser, IUpdatePost, IUserInfo } from "@/types";
import { account, appwriteConfig, avatars, databases, storage } from "./config";


// =====================================
//                AUTH
// =====================================

export async function createUserAccount(user: INewUser) {
  try {
    console.log(user);
    console.log("userId", process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name,
    )
   
    if (!newAccount) throw new Error;

    const avatarUrl = avatars.getInitials(user.name);

    const newUser = await saveUserToDB({
      accountId: newAccount.$id,
      name: newAccount.name,
      email: newAccount.email,
      username: user.username,
      imageUrl: avatarUrl,
    })
    
    return newUser;

  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function saveUserToDB(user: {
  accountId: string;
  email: string;
  name: string;
  imageUrl: URL;
  username: string;
}) {
  try {
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      user,
    )

    return newUser;

  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function signInAccount(user: { email: string; password: string; }) {
  try {
    const session = await account.createEmailSession(user.email, user.password);

    return session;
    
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function getCurrentUser() {
  try {
    const currentAccount = await account.get();
    // console.log("update working for current account");

    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId, 
      appwriteConfig.userCollectionId, 
      [Query.equal('accountId', currentAccount.$id)]
    )

    if (!currentUser) throw Error;

    return currentUser.documents[0];

  } catch (error) {
    console.error(error);
    // return error;
  }
}

export async function signOutAccount() {
  try {
    const session = await account.deleteSession("current");
    // console.log('current session', session)

    return session;
  } catch (error) {
    console.error(error);
  }
}

// =====================================
//                POSTS
// =====================================

// ========================= CREATE POST
export async function createPost(post: INewPost) {
  try {
    // Upload file to appwrite storage
    const uploadedFile = await uploadFile(post.file[0]);

    if (!uploadedFile) throw Error;

    // Get file url
    const fileUrl = getFilePreview(uploadedFile.$id);
    if (!fileUrl) {
      await deleteFile(uploadedFile.$id);
      throw Error;
    }

    // Convert tags into array
    const tags = post.tags?.replace(/ /g, "").split(",") || [];

    // Create post
    const newPost = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.postCollectionId,
      ID.unique(),
      {
        creator: post.userId,
        caption: post.caption,
        imageUrl: fileUrl,
        imageId: uploadedFile.$id,
        location: post.location,
        tags: tags,
      }
    );

    if (!newPost) {
      await deleteFile(uploadedFile.$id);
      throw Error;
    }

    return newPost;
  } catch (error) {
    console.log(error);
  }
}

// ========================= UPLOAD FILE
export async function uploadFile(file: File) {
  try {
    const uploadedFile = await storage.createFile(
      appwriteConfig.storageId,
      ID.unique(),
      file
    );

    if (!uploadedFile) throw Error;

    return uploadedFile;
  } catch (error) {
    console.log(error);
  }
}

// ============================== GET FILE URL
export function getFilePreview(fileId: string) {
  try {
    const fileUrl = storage.getFilePreview(
      appwriteConfig.storageId,
      fileId,
      600,
      400,
      "top",
      80
    );

    if (!fileUrl) throw Error;

    return fileUrl;
  } catch (error) {
    console.log(error);
  }
}

// ============================== DELETE FILE
export async function deleteFile(fileId: string) {
  try {
    await storage.deleteFile(appwriteConfig.storageId, fileId);

    return { status: "ok" };
  } catch (error) {
    console.log(error);
  }
}

// ============================== GET POPULAR POSTS (by highest likes)
export async function getRecentPosts() {
  try {
    const posts = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.postCollectionId,
      [Query.orderDesc('$createdAt'), Query.limit(20)]
    )

    if (!posts) throw Error;

    return posts;
  } catch (error) {
    console.log("Error in getRecentPosts", error);
  }
}

export async function likePost(postId: string, likesArray: string[]) {
  try {
    const updatedPost = await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.postCollectionId,
      postId,
      {
        likes: likesArray
      }
    )

    if (!updatedPost) throw Error;

    return updatedPost;
  } catch (error) {
    console.log(error);
  }
}

// export async function getPostLikesAndSaves(postId: string, userId: string) {
//   try {
//     const isLiked
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function savePost(postId: string, userId: string) {
  try {
    const savedPost = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.saveCollectionId,
      ID.unique(),
      {
        user: userId,
        post: postId
      }
    )

    if (!savedPost) throw Error;

    return savedPost;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteSavedPost(savedRecordId: string) {
  try {
    const statusCode = await databases.deleteDocument(
      appwriteConfig.databaseId,
      appwriteConfig.saveCollectionId,
      savedRecordId,
    )

    if (!statusCode) throw Error;

    return statusCode;
  } catch (error) {
    console.log(error);
  }
}

export async function updatePost(post: IUpdatePost) {
  const hasFileToUpdate = post.file.length > 0;
  try {

    let image = {
      imageUrl: post.imageUrl,
      imageId: post.imageId,
    }
    

    if (hasFileToUpdate) {

      // delete the previous image for storage compensation
      await deleteFile(post.imageId);
      // Upload image to the storage

      const uploadedFile = await uploadFile(post.file[0]);
      if (!uploadedFile) throw Error;

      // Get file url
      const fileUrl = getFilePreview(uploadedFile.$id);
      // console.log("fileUrl", fileUrl);

      if (!fileUrl) {
        deleteFile(uploadedFile.$id);
        throw Error;
      }

      image = { ...image, imageUrl: fileUrl, imageId: uploadedFile.$id };
    }

    const tags = post.tags?.replace(/ /g, '').split(',') || [];

    const updatedPost = await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.postCollectionId,
      post.postId,
      {
        caption: post.caption,
        imageUrl: image.imageUrl,
        imageId: image.imageId,
        location: post.location,
        tags: tags,
      }
    )

    if (!updatedPost) {
      await deleteFile(post.imageId)
      throw Error;
    }

    return updatedPost;
  } catch (error) {
    console.log(error);
  }
}

export async function deletePost(postId: string, imageId: string) {
  if (!postId || !imageId) throw Error;

  try {
    await databases.deleteDocument(
      appwriteConfig.databaseId,
      appwriteConfig.postCollectionId,
      postId
    )

    await deleteFile(imageId);
    
    return { status: "OK"};

  } catch (error) {
    console.log(error);
  }
}

export async function getInfinitePosts({ pageParam }: { pageParam: string | number 
 | undefined }) {
  const queries: any[] = [Query.orderDesc('$updatedAt'), Query.limit(10)];
  console.log('pageParam: ', pageParam);

  if (pageParam) {
    queries.push(Query.cursorAfter(pageParam.toString()));
  }

  try {
    const posts = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.postCollectionId,
      queries
    )

    if (!posts) throw Error;

    return posts;
  } catch (error) {
    console.log(error);
  }
}

export async function searchPosts(searchTerm: string) {
  try {
    const posts = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.postCollectionId,
      [Query.search('caption', searchTerm)]
    )

    if (!posts) throw Error;

    return posts;
  } catch (error) {
    console.log(error);
  }
}

// =====================================
//                USER
// =====================================

export async function getPostById(postId: string) {
  try {
    const post = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.postCollectionId,
      postId,
    )
    
    if (!post) throw Error;

    return post;
  } catch (error) {
    console.log(error);
  }
}

export async function getSavesByUser(userId: string) {

  try {
    // console.log("userId in get:", userId);
    const saves = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.saveCollectionId,
      [Query.orderDesc('$createdAt'), Query.limit(10)],
    )
    if (!saves) throw Error;
    
    const userSaves = saves.documents.filter((save) => save.user.$id === userId);
    return userSaves;

  } catch (error) {
    console.log(error);
  }
}

export async function getAllUsers() {
  try {

    const users = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.orderDesc('$createdAt'), Query.limit(10)]
    )

    if (!users) throw Error;

    return users;

  } catch (error) {
    console.log(error);
  }
}

export async function getUserById(userId: string) {
  try {

    const user = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      userId,
    )

    if (!user) throw Error;

    return user;

  } catch (error) {
    console.log(error);
  }
} 

// upload the file and when edited remove the older file
// Three functions: 
// editAvatarUser(userId, file: imageFile) => edit avatar for user
export async function editUserAvatar(userId: string, avatarFile: File, prevImgId: string) {
  try {

    const uploadedAvatar = await uploadAvatar(avatarFile);
    
    if (!uploadedAvatar) throw Error;

    const avatarUrl = getAvatarPreview(uploadedAvatar.$id)
    
    if (!avatarUrl) {
      await deleteAvatar(uploadedAvatar.$id);
      throw Error;
    }
    if (prevImgId) {
      await deleteAvatar(prevImgId);
    }
    
    const updatedUser = databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      userId, 
      {
        imageId: uploadedAvatar.$id,
        imageUrl: avatarUrl,
      }
    );

    if (!updatedUser) {
      deleteAvatar(uploadedAvatar.$id);
      throw Error;
    }

    return updatedUser;

  } catch (error) {
    console.log(error);
  }
}
// uploadAvatar(file) => uploadAvatar image to storage and bind the storage id to user in database if not uploaded then delete the uploaded file
export async function uploadAvatar(avatarFile: File) {
  try {

    // const file = new File([avatarFile], "icon.png");
    const uploadedAvatar = await storage.createFile(
      appwriteConfig.storageAvatarId,
      ID.unique(),
      avatarFile,
    )
    
    if (!uploadedAvatar) throw Error;

    return uploadedAvatar;

  } catch (error) {
    console.log(error);
  }
}
// deleteAvatar(fileId)
export async function deleteAvatar(fileId: string) {
  try {

    const deletedAvatar = await storage.deleteFile(
      appwriteConfig.storageAvatarId,
      fileId
    )

  } catch (error) {
    console.log(error);
  }
}

// getAvatarPreview()
export function getAvatarPreview(fileId: string) {
  try {
    const filePreview = storage.getFilePreview(
      appwriteConfig.storageAvatarId,
      fileId,
      30,
      30,
      'top',
      30,
    )

    if (!filePreview) throw Error;

    return filePreview;
  } catch (error) {
    console.log(error);
  }
}

export async function getUpdateUserInfo({ userId, userInfo} : { userId: string, userInfo: IUserInfo}) {
  try {
    const updatedUser = await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      userId,
      {
        ...userInfo,
      }
    )

    if (!updatedUser) throw Error;

    return updatedUser;
  } catch (error) {
    console.log(error);
  }
}
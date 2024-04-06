import { INavLink, IUserForm } from "@/types";

export const sidebarLinks : Array<INavLink> = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/wallpaper.svg",
    route: "/explore",
    label: "Explore",
  },
  {
    imgURL: "/assets/icons/people.svg",
    route: "/all-users",
    label: "People",
  },
  {
    imgURL: "/assets/icons/bookmark.svg",
    route: "/saved",
    label: "Saved",
  },
  {
    imgURL: "/assets/icons/gallery-add.svg",
    route: "/create-post",
    label: "Create Post",
  },
];

export const bottombarLinks : Array<INavLink> = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/wallpaper.svg",
    route: "/explore",
    label: "Explore",
  },
  {
    imgURL: "/assets/icons/bookmark.svg",
    route: "/saved",
    label: "Saved",
  },
  {
    imgURL: "/assets/icons/gallery-add.svg",
    route: "/create-post",
    label: "Create",
  },
];

export const UserFormLists: Array<IUserForm> = [
  {
    title: 'Username:',
    id: 'username',
    classes: '',
  },
  {
    title: 'Name:',
    id: 'name',
    classes: '',
  },
  {
    title: 'Email:',
    id: 'email',
    classes: '',
  },
  {
    title: 'Bio:',
    id: 'bio',
    classes: '',
  },
]
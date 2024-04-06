import PostCardLoader from "@/components/shared/PostCardLoader";

export default function Loading() {
  return (
    <div className='home-container'>
      <h2 className='home-heading'>
        Saved Posts
      </h2>
      { 
        <ul className='flex flex-col flex-1 items-center gap-9 w-full'>
        { [0, 1].map((num) => (
          <PostCardLoader key={num} />
        )) }
        </ul>
        
      }
    </div>
  )
}
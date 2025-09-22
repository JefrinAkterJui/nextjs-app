

const DynamicBlogPage = async ({params}: {params: Promise<{blogId: string}>}) => {
  const {blogId} = await params
  return (
    <div>
        <h1>
            Dynamic Blog Page ID: {blogId}
        </h1>
    </div>
  )
}

export default DynamicBlogPage
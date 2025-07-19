import PostsTable from "@/components/dashboard/PostsTable";
import PostsPagination from "@/components/posts/PostsPagination";
import BackButton from "@/components/ui/BackButton";

const PostPage = () => {
    return (
        <>
            <BackButton text="Go Back" link="/" />
            <PostsTable />
            <PostsPagination />
        </>
    );
}
 
export default PostPage;
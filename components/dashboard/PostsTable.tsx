import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption
} from "@/components/ui/table"
import posts from "@/data/posts";
import { Post } from "@/types/posts";
import Link from "next/link";
import { Button } from "../ui/button";

interface PostsTableProps {
    limit?: number;
    title?: string;
}

const PostsTable = ({limit, title}:PostsTableProps) => {
    // Sort posts in dec order based on date
    const sortedPosts: Post[] = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    // Filter posts based on limit
    const filterPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;
    return (
        <>
            <div className="mt-10">
                <h3 className="text-2xl mb-4 font-semibold">{ title ? title : 'Posts'}</h3>
                <Table>
                    <TableCaption>A list of recent posts</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead className="hidden md:table-cell">Author</TableHead>
                            <TableHead className="hidden md:table-cell text-right">Date</TableHead>
                            <TableHead>View</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filterPosts.map((post: Post) => (
                            <TableRow key={post.id}>
                                <TableCell className="font-medium">{post.title}</TableCell>
                                <TableCell className="hidden md:table-cell">{post.author}</TableCell>
                                <TableCell className="hidden md:table-cell text-right">{new Date(post.date).toLocaleDateString()}</TableCell>   
                                <TableCell>
                                    <Link href={`/posts/edit/${post.id}`}>
                                        <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">Edit</Button>
                                    </Link>    
                                </TableCell>    
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    );
}
 
export default PostsTable;

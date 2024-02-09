'use client';
import { useSearchParams } from 'next/navigation'
// import { verifyToken } from '../api/users/[id]';
export default function Page() {
    const searchParams = useSearchParams()
    const token = searchParams.get('token')
    // verifyToken(token);
    return (
        <div>Page {token} </div> 
    );
}
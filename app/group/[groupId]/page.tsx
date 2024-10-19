import Header from '@/app/components/Header';
import GroupConfirmationClient from '@/app/components/GroupConfirmationClient';

export default function GroupConfirmation({ params }: { params: { groupId: string } }) {
    const groupUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/group/${params.groupId}`;

    return (
        <div className="min-h-screen bg-blue-50 flex flex-col">
            <Header />
            <div className="flex-grow flex flex-col justify-center px-4 py-6 sm:px-0">
            </div>
        </div>
    );
}

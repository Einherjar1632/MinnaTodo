import GroupConfirmationClient from '../../components/GroupConfirmationClient';

export default function GroupConfirmation({ params }: { params: { groupId: string } }) {
    const groupUrl = `https://minnanotodo.jp/group/${params.groupId}`;

    return (
        <div className="min-h-screen bg-blue-50 flex flex-col">
            <div className="bg-teal-500 text-white text-center py-4 text-2xl font-bold">
                みんなのTodo
            </div>
            <div className="flex-grow flex flex-col justify-center px-4 py-6 sm:px-0">
                <div className="max-w-md w-full mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                    <GroupConfirmationClient groupUrl={groupUrl} />
                </div>
            </div>
        </div>
    );
}
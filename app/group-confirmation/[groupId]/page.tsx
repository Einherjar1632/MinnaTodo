import GroupConfirmationClient from '../../components/GroupConfirmationClient';

export default function GroupConfirmation({ params }: { params: { groupId: string } }) {
    const groupUrl = `https://minnanotodo.jp/group/${params.groupId}`;

    return (
        <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-teal-500 text-white text-center py-6 text-3xl font-bold">
                    みんなのTodo
                </div>
                <GroupConfirmationClient groupUrl={groupUrl} />
            </div>
        </div>
    );
}
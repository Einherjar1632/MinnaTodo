'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CreateGroupRequest, CreateGroupResponse } from "@/app/api/groups/route";
import { CreateUserRequest, CreateUserResponse } from "@/app/api/users/route";

export default function CreateGroupForm() {
    const [groupName, setGroupName] = useState("");
    const [memberName, setMemberName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // コンポーネントマウント時にローカルストレージからニックネームを取得
        const storedNickname = localStorage.getItem('userNickname');
        if (storedNickname) {
            setMemberName(storedNickname);
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const groupRequestData: CreateGroupRequest = { groupName: groupName };
            const groupResponse = await fetch('/api/groups', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(groupRequestData),
            });

            if (groupResponse.ok) {
                const groupData: CreateGroupResponse = await groupResponse.json();

                const userRequestData: CreateUserRequest = {
                    nickname: memberName,
                    groupId: groupData.id
                };
                const userResponse = await fetch('/api/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userRequestData),
                });

                if (userResponse.ok) {
                    const userData: CreateUserResponse = await userResponse.json();
                    router.push(`/group-confirmation/${groupData.uuid}`);
                } else {
                    console.error('ユーザーの作成に失敗しました');
                }
            } else {
                console.error('グループの作成に失敗しました');
            }
        } catch (error) {
            console.error('エラーが発生しました:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form className="space-y-4 max-w-md w-full mx-auto" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="groupName" className="block text-sm font-medium text-gray-700 mb-1">
                    Todoのグループ名
                </label>
                <input
                    type="text"
                    id="groupName"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                    placeholder="BBQの買い物リスト、家族旅行の準備リスト 等"
                    required
                />
            </div>
            <div>
                <label htmlFor="memberName" className="block text-sm font-medium text-gray-700 mb-1">
                    あなたの名前
                </label>
                <div className="flex">
                    <input
                        type="text"
                        id="memberName"
                        value={memberName}
                        onChange={(e) => setMemberName(e.target.value)}
                        className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                        placeholder="ニックネームやお名前を入力してください"
                        required
                    />
                </div>
            </div>
            <button
                type="submit"
                className="w-full bg-teal-500 text-white py-3 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 text-sm font-medium mt-6"
                disabled={isLoading}
            >
                {isLoading ? "作成中..." : "グループを作成"}
            </button>
        </form>
    );
}

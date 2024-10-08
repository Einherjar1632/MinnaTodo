'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import { v4 as uuidv4 } from 'uuid';

// DynamoDBクライアントの設定
const client = new DynamoDBClient({
    region: process.env.NEXT_PUBLIC_AWS_REGION,
    credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY!,
    },
});

const docClient = DynamoDBDocumentClient.from(client);

// モックのグループ作成関数
const mockCreateGroup = async (groupName: string, memberName: string): Promise<string> => {
    const randomId = Math.random().toString(36).substring(2, 15);
    return new Promise((resolve) => {
        setTimeout(() => resolve(randomId), 500);
    });
};

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
            // ニックネームをローカルストレージに保存
            localStorage.setItem('userNickname', memberName);

            // グループIDの生成（UUID）
            const groupId = uuidv4();

            // DynamoDBにグループを登録
            const currentTime = new Date().toISOString();
            await docClient.send(
                new PutCommand({
                    TableName: "MinnaTodoGroups",
                    Item: {
                        GroupId: groupId,
                        GroupName: groupName,
                        CreatedAt: currentTime,
                        LastUsedAt: currentTime,
                    },
                })
            );

            router.push(`/group-confirmation/${groupId}`);
        } catch (error) {
            console.error("グループの作成に失敗しました", error);
            alert("グループの作成に失敗しました。もう一度お試しください。");
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
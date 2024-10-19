'use client';

import Header from '@/app/components/Header';
import { Pencil, SmilePlus, AlignJustify, Trash2, MoreVertical, Plus, X, User } from "lucide-react"
import Image from "next/image"
import { useState } from 'react';

export default function GroupConfirmation({ params }: { params: { groupId: string } }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [groupName, setGroupName] = useState("ファミリーToDo"); // 仮のグループ名
    const [members] = useState([
        { name: "パパ", color: "bg-blue-500" },
        { name: "ママ", color: "bg-pink-500" },
        { name: "子供1", color: "bg-green-500" },
        { name: "子供2", color: "bg-purple-500" }
    ]);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleGroupNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGroupName(e.target.value);
    };

    const saveGroupName = () => {
        // ここでグループ名の保存処理を実装
        closeModal();
    };

    return (
        <div className="flex flex-col h-screen bg-teal-500 text-white font-sans">
            <Header />

            {/* Navigation */}
            <div className="flex items-center px-4 py-2">
                <Pencil className="w-8 h-8 mr-4 cursor-pointer" onClick={openModal} />
                <div className="bg-white text-teal-500 px-6 py-2 rounded-full font-bold">
                    やることリスト
                </div>
                <div className="flex-grow"></div>
                <div className="flex space-x-4">
                    <SmilePlus className="w-8 h-8" />
                    <AlignJustify className="w-8 h-8" />
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-white rounded-t-3xl mt-4 p-4 overflow-y-auto">
                <div className="flex justify-end mb-4">
                    <Trash2 className="w-6 h-6 text-gray-400 mr-2" />
                    <MoreVertical className="w-6 h-6 text-gray-400" />
                </div>

                {/* Todo Items */}
                {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-start mb-4">
                        <div className="w-6 h-6 rounded-full border-2 border-gray-300 mr-4 mt-1"></div>
                        <div className="flex-1">
                            <p className="text-black text-sm mb-1">
                                {item === 1 ? "右上のメニューからカテゴリの追加・" : ""}
                                {item === 2 ? "左上メニュー内の招待ボタンからパー" : ""}
                                {item === 3 ? "便利な使い方はこちら↓" : ""}
                            </p>
                            <p className="text-black text-sm">
                                {item === 1 ? "編集ができます。「買い物リスト」な" : ""}
                                {item === 2 ? "トナーを招待しましょう👍" : ""}
                                {item === 3 ? "https://familytodo.notion.site/familytod..." : ""}
                            </p>
                        </div>
                        <Image
                            src="/placeholder.svg"
                            width={40}
                            height={40}
                            alt="Avatar"
                            className="rounded-full"
                        />
                    </div>
                ))}

                {/* Blue Section */}
                <div className="bg-[#4A90E2] rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-white">ファミリーToDo</span>
                        <span className="text-white text-xs">今</span>
                    </div>
                    <p className="text-white text-sm mb-2">パパがタスクを完了しました</p>
                    <p className="text-white text-sm">牛肉</p>
                    <div className="flex justify-between mt-2">
                        <Image
                            src="/placeholder.svg"
                            width={100}
                            height={180}
                            alt="App Screenshot 1"
                            className="rounded-lg"
                        />
                        <Image
                            src="/placeholder.svg"
                            width={100}
                            height={180}
                            alt="App Screenshot 2"
                            className="rounded-lg"
                        />
                    </div>
                </div>

                {/* App Usage Section */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                        <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                        <span className="text-black text-sm">アプリの使い方</span>
                    </div>
                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>

            {/* Add Button */}
            <div className="absolute bottom-4 right-4">
                <button className="bg-teal-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
                    <Plus className="w-8 h-8" />
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg p-6 w-full max-w-sm">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-gray-800">グループ設定</h2>
                            <X className="w-6 h-6 text-gray-600 cursor-pointer" onClick={closeModal} />
                        </div>
                        <input
                            type="text"
                            value={groupName}
                            onChange={handleGroupNameChange}
                            className="w-full p-2 border border-gray-300 rounded mb-4 text-gray-800"
                        />
                        <button
                            onClick={saveGroupName}
                            className="w-full bg-teal-500 text-white py-2 rounded mb-4"
                        >
                            保存
                        </button>
                        <h3 className="font-bold text-gray-800 mb-3">メンバー</h3>
                        <ul className="space-y-2">
                            {members.map((member, index) => (
                                <li key={index} className="flex items-center bg-gray-100 rounded-lg p-2">
                                    <div className={`w-8 h-8 rounded-full ${member.color} flex items-center justify-center mr-3`}>
                                        <User className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-gray-800">{member.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}
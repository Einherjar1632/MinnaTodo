import Header from '../components/Header';
import { Home, User, Menu, Trash2, MoreVertical, Plus } from 'lucide-react';

export default function TodoList() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            {/* ステータスバー */}
            <div className="bg-orange-500 text-white px-4 py-2 flex justify-between items-center">
                <span className="text-lg font-semibold">11:54</span>
                <div className="flex items-center space-x-2">
                    <span>●●●●</span>
                    <span>📶</span>
                    <span>82%</span>
                </div>
            </div>

            {/* ナビゲーションバー */}
            <div className="bg-orange-500 text-white px-4 py-2 flex justify-between items-center">
                <Home className="w-6 h-6" />
                <div className="flex space-x-4">
                    <User className="w-6 h-6" />
                    <Menu className="w-6 h-6" />
                </div>
            </div>

            {/* セグメントコントロール */}
            <div className="flex bg-white rounded-full m-4 p-1">
                <button className="flex-1 bg-orange-500 text-white rounded-full py-2 px-4">
                    やることリスト
                </button>
                <button className="flex-1 text-gray-600 rounded-full py-2 px-4">
                    げへ
                </button>
            </div>

            {/* TODOリスト */}
            <div className="flex-1 bg-white mx-4 rounded-lg overflow-hidden">
                <div className="p-4 space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                                <span className="text-gray-500">✓</span>
                            </div>
                            <div>
                                <h3 className="font-semibold">こんにちは</h3>
                                <p className="text-sm text-gray-500">てすとあいうえおおおお</p>
                                <p className="text-xs text-gray-400">明後日</p>
                            </div>
                        </div>
                        <img src="/placeholder.svg?height=32&width=32" alt="User" className="w-8 h-8 rounded-full" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                                <span className="text-gray-500">✓</span>
                            </div>
                            <div>
                                <h3 className="font-semibold">めめ</h3>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                                <span className="text-white">✓</span>
                            </div>
                            <div>
                                <h3 className="font-semibold">あいう</h3>
                                <p className="text-xs text-gray-400">明後日</p>
                            </div>
                        </div>
                        <img src="/placeholder.svg?height=32&width=32" alt="User" className="w-8 h-8 rounded-full" />
                    </div>
                </div>
            </div>

            {/* フローティングアクションボタン */}
            <div className="fixed bottom-20 right-4">
                <button className="bg-orange-500 text-white rounded-full p-4 shadow-lg">
                    <Plus className="w-6 h-6" />
                </button>
            </div>

            {/* 広告バナー */}
            <div className="bg-white p-4 border-t">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-xs text-gray-500">東急Livable株式會社</p>
                        <p className="font-semibold">厳選東京都心豪宅</p>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm">
                        詳細 ＞
                    </button>
                </div>
            </div>
        </div>
    );
}
'use client';

import { CheckIcon } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // 修正
import Header from './Header';

interface GroupConfirmationClientProps {
    groupUrl: string;
}

export default function GroupConfirmationClient({ groupUrl }: GroupConfirmationClientProps) {
    const [copied, setCopied] = useState(false);
    const router = useRouter(); // 修正

    const handleCopy = () => {
        navigator.clipboard.writeText(groupUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleNavigate = () => {
        router.push(groupUrl); // グループURLに直接遷移するように修正
    };

    return (
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            <div className="flex justify-center">
                <div className="bg-teal-500 rounded-full p-3">
                    <CheckIcon className="w-12 h-12 text-white" />
                </div>
            </div>
            <h2 className="text-2xl font-bold text-center text-gray-800">
                グループを作成しました！
            </h2>
            <p className="text-center text-gray-600">
                まずはグループページのURLをコピーして、<br />
                LINEなどでメンバーに共有しましょう。
            </p>
            <div className="flex items-center bg-gray-100 rounded-md">
                <input
                    type="text"
                    value={groupUrl}
                    readOnly
                    className="flex-grow px-3 py-2 bg-transparent focus:outline-none"
                />
                <button
                    onClick={handleCopy}
                    className="bg-teal-500 text-white px-4 py-2 rounded-r-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                    {copied ? 'コピーしました！' : 'コピー'}
                </button>
            </div>
            <a
                onClick={handleNavigate} // 変更
                className="block w-full text-center border border-teal-500 text-teal-500 py-3 rounded-md hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 cursor-pointer" // 変更
            >
                グループページへ進む
            </a>
        </div>
    );
}

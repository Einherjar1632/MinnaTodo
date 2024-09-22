'use client';

import { CheckIcon } from 'lucide-react';
import { useState } from 'react';

interface GroupConfirmationClientProps {
    groupUrl: string;
}

export default function GroupConfirmationClient({ groupUrl }: GroupConfirmationClientProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(groupUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="p-6 space-y-6">
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
                href={groupUrl}
                className="block w-full text-center border border-teal-500 text-teal-500 py-3 rounded-md hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
                グループページへ進む
            </a>
        </div>
    );
}
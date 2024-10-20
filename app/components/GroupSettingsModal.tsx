import React from 'react';
import { X, User } from 'lucide-react';

interface GroupSettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
    groupName: string;
    onGroupNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSave: () => void;
    error: string;
    members: { name: string; color: string }[];
}

const GroupSettingsModal: React.FC<GroupSettingsModalProps> = ({
    isOpen,
    onClose,
    groupName,
    onGroupNameChange,
    onSave,
    error,
    members
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 w-full max-w-sm">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800">グループ設定</h2>
                    <X className="w-6 h-6 text-gray-600 cursor-pointer" onClick={onClose} />
                </div>
                <input
                    type="text"
                    value={groupName}
                    onChange={onGroupNameChange}
                    className="w-full p-2 border border-gray-300 rounded mb-4 text-gray-800"
                />
                <button
                    onClick={onSave}
                    className="w-full bg-teal-500 text-white py-2 rounded mb-4"
                >
                    保存
                </button>
                {error && <p className="text-red-500 mb-4">{error}</p>}
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
    );
};

export default GroupSettingsModal;

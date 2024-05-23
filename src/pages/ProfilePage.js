import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaUserEdit, FaLock, FaConciergeBell, FaBell, FaClipboardList, FaQuestionCircle } from 'react-icons/fa';
import defaultAvatar from '../assets/defaultAvatar2.png';
import EditProfileModal from '../components/EditProfileModal';

const ProfilePage = () => {
  const { fullName, email, avatar, phone, address, accountType } = useSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const closeEditModal = () => {
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center space-x-6 mb-6">
          <img src={avatar || defaultAvatar} alt="Avatar" className="w-32 h-32 rounded-full" />
          <div>
            <h2 className="text-3xl font-bold">{fullName}</h2>
            <p className="text-gray-700">{email}</p>
            <p className="text-gray-700">{phone}</p>
            <p className="text-gray-700">{address}</p>
          </div>
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={handleEditClick}
        >
          <FaUserEdit className="inline-block mr-2" /> Chỉnh sửa thông tin
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {/* Account Type */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Loại Tài Khoản</h3>
          <p className="text-gray-700">{accountType || 'Standard'}</p>
        </div>

        {/* Update Password */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Cập Nhật Mật Khẩu</h3>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300">
            <FaLock className="inline-block mr-2" /> Đổi Mật Khẩu
          </button>
        </div>

        {/* Company Services */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Dịch Vụ Của Công Ty</h3>
          <ul className="text-gray-700 list-disc list-inside">
            <li>Tư vấn khách hàng</li>
            <li>Hỗ trợ kỹ thuật</li>
            <li>Dịch vụ bảo hành</li>
          </ul>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Giao Dịch Gần Đây</h3>
          <p className="text-gray-700">Chưa có giao dịch nào gần đây.</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300 mt-4">
            <FaClipboardList className="inline-block mr-2" /> Xem Lịch Sử Giao Dịch
          </button>
        </div>

        {/* Notifications */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Thông Báo</h3>
          <p className="text-gray-700">Bạn có 3 thông báo mới.</p>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300 mt-4">
            <FaBell className="inline-block mr-2" /> Xem Thông Báo
          </button>
        </div>

        {/* Help & Support */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Trợ Giúp & Hỗ Trợ</h3>
          <p className="text-gray-700">Cần giúp đỡ? Liên hệ với chúng tôi ngay.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 mt-4">
            <FaQuestionCircle className="inline-block mr-2" /> Liên Hệ Hỗ Trợ
          </button>
        </div>
      </div>

      {isEditing && <EditProfileModal closeModal={closeEditModal} />}
    </div>
  );
};

export default ProfilePage;

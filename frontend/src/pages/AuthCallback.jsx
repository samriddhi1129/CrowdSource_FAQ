// frontend/src/pages/AuthCallback.jsx
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import toast from 'react-hot-toast';

export default function AuthCallback() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const setAuth = useAuthStore((state) => state.setAuth);

  useEffect(() => {
    const token = searchParams.get('token');
    const refresh = searchParams.get('refresh');
    const error = searchParams.get('error');

    // Handle error
    if (error) {
      toast.error('Google login failed. Please try again.');
      navigate('/login', { replace: true });
      return;
    }

    // Handle missing token
    if (!token) {
      toast.error('Authentication failed');
      navigate('/login', { replace: true });
      return;
    }

    // Extract user data from URL params
    const userId = searchParams.get('userId');
    const email = searchParams.get('email');
    const username = searchParams.get('username');
    const fullName = searchParams.get('fullName');
    const role = searchParams.get('role');
    const status = searchParams.get('status');
    const emailVerified = searchParams.get('emailVerified') === 'true';
    const avatarUrl = searchParams.get('avatarUrl');
    const reputation = parseInt(searchParams.get('reputation')) || 0;

    // Set authentication data
    setAuth({
      accessToken: token,
      refreshToken: refresh,
      user: {
        id: userId,
        email: email,
        username: username,
        full_name: fullName,
        role: role,
        status: status,
        email_verified: emailVerified,
        avatar_url: avatarUrl,
        reputation_score: reputation,
      },
    });

    toast.success(`Welcome, ${fullName}!`);
    navigate('/explore', { replace: true });
  }, [navigate, searchParams, setAuth]);

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin w-12 h-12 border-4 border-white/20 border-t-white rounded-full mx-auto mb-4" />
        <p className="text-white text-lg font-medium">Logging you in...</p>
        <p className="text-white/60 text-sm mt-2">Please wait</p>
      </div>
    </div>
  );
}

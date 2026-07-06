// frontend/src/pages/AuthCallback.jsx
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import toast from 'react-hot-toast';

export default function AuthCallback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { setAuth } = useAuthStore();

  useEffect(() => {
    // Your backend sends 'token' and 'refresh' (not 'accessToken')
    const accessToken  = searchParams.get('token');
    const refreshToken = searchParams.get('refresh');
    const error        = searchParams.get('error');

    // Handle error from Google
    if (error) {
      toast.error('Google login failed. Please try again.');
      navigate('/login', { replace: true });
      return;
    }

    // Handle missing token
    if (!accessToken) {
      toast.error('Authentication failed — no token received');
      navigate('/login', { replace: true });
      return;
    }

    // Read user data from URL params (your backend sends all these)
    const userId       = searchParams.get('userId');
    const email        = searchParams.get('email');
    const username     = searchParams.get('username');
    const fullName     = searchParams.get('fullName');
    const role         = searchParams.get('role');
    const status       = searchParams.get('status') || 'active';
    const emailVerified = searchParams.get('emailVerified') === 'true';
    const avatarUrl    = searchParams.get('avatarUrl');
    const reputation   = parseInt(searchParams.get('reputation')) || 0;

    // Set auth in store
    setAuth({
      accessToken,
      refreshToken: refreshToken || '',
      user: {
        id:               userId,
        email:            email,
        username:         username,
        full_name:        fullName,
        role:             role,
        status:           status,
        email_verified:   emailVerified,
        avatar_url:       avatarUrl || '',
        reputation_score: reputation,
      },
    });

    toast.success(`Welcome, ${fullName}! 🎉`);
    navigate('/explore', { replace: true });

  }, []);

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4" />
        <p className="text-white text-lg font-semibold">Signing you in with Google...</p>
        <p className="text-white/60 text-sm mt-2">Please wait a moment</p>
      </div>
    </div>
  );
}
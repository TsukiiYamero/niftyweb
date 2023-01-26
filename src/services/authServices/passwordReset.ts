import { supabase } from '@/api/config';

export const updateProfile = (controller: AbortController, { password, email }: { password?: string, email?: string }) => {
    if (!password && !email) return {
        data: [], error: null
    };

    return supabase.auth.updateUser({
        password,
        email
    });
};
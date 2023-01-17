import { PostgrestError } from '@supabase/supabase-js';

export type SupabaseCommonResponse = {
    data: any[],
    error: PostgrestError | null
}
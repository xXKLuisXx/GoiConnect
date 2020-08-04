export interface AuthResponse {
    userResponse: {
        token_type: string;
        expires_in: number;
        access_token: string;
        refresh_token: string;
        example: string;
    };
}

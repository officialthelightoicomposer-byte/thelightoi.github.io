export const CONFIG = {
    WIDTH: 1920,
    HEIGHT: 1080,
    BOARD_COLS: 9,
    BOARD_ROWS: 9,
    TILE_SIZE: 90,
    COLORS: {
        LIGHT: 0xfef9d7, // Cream/pale yellow from image
        DARK: 0xb5d5fe,  // Light blue from image
        HIGHLIGHT: 0x55ff55,
        CAPTURE: 0xff5555,
        UI_BG: 0x333333
    },
    PLAYER_TYPES: {
        WHITE: 'human', // 'human' or 'computer'
        BLACK: 'computer'
    },
    ASSETS: {
        BLACK_KNIGHT: 'https://rosebud.ai/assets/black_knight.webp?pOwa',
        BLACK_CANNON: 'https://rosebud.ai/assets/black_cannon.webp?k4Qq',
        BLACK_KING: 'https://rosebud.ai/assets/black_king.webp?Hj20',
        WHITE_KNIGHT: 'https://rosebud.ai/assets/white_knight.webp?188l',
        WHITE_CANNON: 'https://rosebud.ai/assets/white_cannon.webp?3EaQ',
        WHITE_KING: 'https://rosebud.ai/assets/white_king.webp?3GyO'
    }
};

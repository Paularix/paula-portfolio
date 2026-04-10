export const themes = {
    classic: {
        cream: '#F3EFE0',
        lavender: '#DBD4FF',
        olive: '#808034',
        purple: '#6B437D',
    },

    // 1. Oruga Monarca: El purple debe ser el negro azulado para que los títulos se lean.
    nature_monarch: {
        cream: '#E0F2F1',
        lavender: '#B3E5FC',
        olive: '#C8A03A',
        purple: '#252332',
    },

    // 2. Orquídea Atigrada: El cream era demasiado oscuro, lo hemos aclarado para que sea fondo.
    nature_orchid: {
        cream: '#FFFBE6',
        lavender: '#A99A54',
        olive: '#ddb252',
        purple: '#553533',
    },

    // 3. Hongo de Fuego
    nature_fungus: {
        cream: '#F0F6D8',
        lavender: '#FFCC80',
        olive: '#964929',
        purple: '#304D79',
    },

    // 4. Hoja Púrpura: Invertimos para que el rosa oscuro sea el purple (texto)
    nature_leaf_purple: {
        cream: '#FDF2F5',
        lavender: '#DBB9C3',
        olive: '#758045',
        purple: '#7B4964',
    },

    // 5. Atardecer en el Mar: Cream debe ser el gris lino claro de la espuma/nubes.
    nature_sunset: {
        cream: '#F4F4F2',
        lavender: '#B0BEC5',
        olive: '#674254',
        purple: '#F69D59',
    },

    // 6. Hoja Exótica: El verde oscuro al purple para títulos.
    nature_leaf_red: {
        cream: '#F9FBE7',
        lavender: '#DCEDC8',
        olive: '#8E2F3B',
        purple: '#184436',
    },

    // 7. Atrapamoscas
    nature_flytrap: {
        cream: '#FCF9F2',
        lavender: '#f7e3b2',
        olive: '#879033',
        purple: '#B9244A',
    },

    // 8. Melocotón: El rojo intenso al purple.
    nature_peach: {
        cream: '#FFF8F0',
        lavender: '#FBE4B7',
        olive: '#E9A43F',
        purple: '#891E1F',
    },

    // 9. Mariposa de Fuego
    nature_butterfly: {
        cream: '#F5F5F5',
        lavender: '#dcd7d7',
        olive: '#D7881D',
        purple: '#4D616E',
    },
};
export type ThemeKey = keyof typeof themes;

// IMPORTANTE: Ahora 'colors' apunta a variables de CSS
export const colors = {
    cream: 'var(--cream)',
    lavender: 'var(--lavender)',
    olive: 'var(--olive)',
    purple: 'var(--purple)',
};
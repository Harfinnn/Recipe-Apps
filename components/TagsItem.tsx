import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { COLOR } from '@/constant/color'

interface Props {
    name: string
    handleChangeRecipe: (name: string) => void;
    selectedName: string
}

const TagsItem: FC<Props> = ({ name, handleChangeRecipe, selectedName }) => {
    return (
        <TouchableOpacity
            onPress={() => handleChangeRecipe(name)}
            activeOpacity={0.8}
        >
            <View
                style={[
                    styles.badge,
                    selectedName === name && styles.badgeActive,
                ]}
            >
                <Text
                    style={[
                        styles.badgeText,
                        selectedName === name && styles.badgeTextActive,
                    ]}
                >
                    {name}
                </Text>
            </View>
        </TouchableOpacity>

    )
}

export default TagsItem

const styles = StyleSheet.create({
    badge: {
        backgroundColor: '#FFF3E0', // inactive (keju)
        paddingHorizontal: 18,
        paddingVertical: 8,
        borderRadius: 999,

        borderWidth: 1,
        borderColor: '#FFE0B2',

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 3,
    },

    badgeActive: {
        backgroundColor: '#D84315', // active (saus)
        borderColor: '#D84315',
        elevation: 6,
    },

    badgeText: {
        color: '#D84315',
        fontSize: 14,
        fontWeight: '600',
        textTransform: 'capitalize',
    },

    badgeTextActive: {
        color: '#FFFFFF',
        fontWeight: '700',
    },
})
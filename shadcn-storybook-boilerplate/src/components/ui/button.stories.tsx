import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'

const meta = {
    title: 'UI/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
        },
        size: {
            control: 'select',
            options: ['default', 'sm', 'lg', 'icon'],
        },
        disabled: {
            control: 'boolean',
        },
        onClick: { action: 'clicked' },
    },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: 'Button',
        variant: 'default',
    },
}

export const Destructive: Story = {
    args: {
        children: 'Destructive',
        variant: 'destructive',
    },
}

export const Outline: Story = {
    args: {
        children: 'Outline',
        variant: 'outline',
    },
}

export const Secondary: Story = {
    args: {
        children: 'Secondary',
        variant: 'secondary',
    },
}

export const Ghost: Story = {
    args: {
        children: 'Ghost',
        variant: 'ghost',
    },
}

export const Link: Story = {
    args: {
        children: 'Link',
        variant: 'link',
    },
}

export const WithIcon: Story = {
    args: {
        children: '🔍',
        size: 'icon',
    },
}

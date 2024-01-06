import React from 'react'

type Props = {}

export default function Test({ }: Props) {
    return (
        <svg width="200" height="100">
            <path d="M10 80 Q 95 10 180 80" stroke="red" fill="red" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill='red'>TEXT</text>
        </svg>

    )
}
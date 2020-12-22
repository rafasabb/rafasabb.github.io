import type { ReactElement } from 'react';
import Metadata from '@/components/System/Metadata';
import SessionProvider from '@/contexts/SessionProvider';

export default function HomePage(): ReactElement {
    return (
        <>
            <Metadata />
            <SessionProvider />
        </>
    );
}
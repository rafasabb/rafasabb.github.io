import type { ReactElement } from 'react';
import Metadata from '@/components/System/Metadata';
import SessionProvider from '@/contexts/SessionProvider';
import ProcessProvider from '@/contexts/ProcessProvider';

export default function HomePage(): ReactElement {
    return (
        <>
            <Metadata />
            <SessionProvider>
                <ProcessProvider>

                </ProcessProvider>
            </SessionProvider>
        </>
    );
}
import type { ReactElement } from 'react';
import Metadata from '@/components/System/Metadata';
import SessionProvider from '@/contexts/SessionProvider';
import ProcessProvider from '@/contexts/ProcessProvider';
import FileProvider from '@/contexts/FileProvider';
import Desktop from '@/components/System/Desktop';

export default function HomePage(): ReactElement {
    return (
        <>
            <Metadata />
            <SessionProvider>
                <ProcessProvider>
                    <FileProvider>
                        <Desktop>

                        </Desktop>
                    </FileProvider>
                </ProcessProvider>
            </SessionProvider>
        </>
    );
}
import type { ReactElement } from 'react';
import Metadata from '@/components/System/Metadata';
import SessionProvider from '@/contexts/SessionProvider';
import ProcessProvider from '@/contexts/ProcessProvider';
import FileManager from '@/components/System/FileManager/FileManager';
import FileProvider from '@/contexts/FileProvider';
import Desktop from '@/components/System/Desktop';
import Taskbar from '@/components/System/Taskbar/Taskbar';
import IconsView from '@/components/System/FileManager/IconsView';
import WindowManager from '@/components/System/WindowManager/WindowManager';

import Warning from '@/components/warning';

export default function HomePage(): ReactElement {
    return (
        <>
            <Metadata />
            <SessionProvider>
                <ProcessProvider>
                    <FileProvider>
                        <Desktop>
                            <Warning />
                            <FileManager path="/desktop" render={IconsView} />
                            <WindowManager />
                            <Taskbar />
                        </Desktop>
                    </FileProvider>
                </ProcessProvider>
            </SessionProvider>
        </>
    );
}
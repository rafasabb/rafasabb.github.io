import type {
    DosCommandInterface,
    WindowWithDosModules
} from '@/types/components/Programs/dos';

import { CNAME } from '@/utils/constants';
import { useEffect, useState } from 'react';

const useDos = ({
    containerRef,
    url
}: {
    containerRef: React.RefObject<HTMLElement>;
    url?: string;
}): void => {
    const [dosCi, setDosCi] = useState<DosCommandInterface | null>(null);

    useEffect(() => {
        const { current: containerElement } = containerRef as {
            current: HTMLCanvasElement;
        };
        const DosWindow = window as WindowWithDosModules;

        DosWindow.__dirname = '';
        DosWindow.emulators.pathPrefix = '/libs/js-dos';

        DosWindow.Dos(containerElement)
            .run(url?.replace(`https://${CNAME}`, ''))
            .then((ci: DosCommandInterface) => setDosCi(ci));
    }, []);

    useEffect(
        () => () => {
            dosCi?.exit();
        },
        [dosCi]
    );

    require('js-dos');
};

export default useDos;
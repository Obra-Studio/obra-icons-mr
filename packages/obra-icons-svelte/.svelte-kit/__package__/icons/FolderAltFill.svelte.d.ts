import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FolderAltFillProps = typeof __propDef.props;
export type FolderAltFillEvents = typeof __propDef.events;
export type FolderAltFillSlots = typeof __propDef.slots;
export default class FolderAltFill extends SvelteComponentTyped<FolderAltFillProps, FolderAltFillEvents, FolderAltFillSlots> {
}
export {};

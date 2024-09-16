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
export type FolderErrorFillProps = typeof __propDef.props;
export type FolderErrorFillEvents = typeof __propDef.events;
export type FolderErrorFillSlots = typeof __propDef.slots;
export default class FolderErrorFill extends SvelteComponentTyped<FolderErrorFillProps, FolderErrorFillEvents, FolderErrorFillSlots> {
}
export {};

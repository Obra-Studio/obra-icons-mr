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
export type FolderRemoveFillProps = typeof __propDef.props;
export type FolderRemoveFillEvents = typeof __propDef.events;
export type FolderRemoveFillSlots = typeof __propDef.slots;
export default class FolderRemoveFill extends SvelteComponentTyped<FolderRemoveFillProps, FolderRemoveFillEvents, FolderRemoveFillSlots> {
}
export {};

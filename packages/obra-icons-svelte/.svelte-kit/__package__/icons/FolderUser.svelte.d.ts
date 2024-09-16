import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
        strokeWidth?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FolderUserProps = typeof __propDef.props;
export type FolderUserEvents = typeof __propDef.events;
export type FolderUserSlots = typeof __propDef.slots;
export default class FolderUser extends SvelteComponentTyped<FolderUserProps, FolderUserEvents, FolderUserSlots> {
}
export {};

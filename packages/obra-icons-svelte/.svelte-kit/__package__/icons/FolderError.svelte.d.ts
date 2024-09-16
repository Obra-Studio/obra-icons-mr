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
export type FolderErrorProps = typeof __propDef.props;
export type FolderErrorEvents = typeof __propDef.events;
export type FolderErrorSlots = typeof __propDef.slots;
export default class FolderError extends SvelteComponentTyped<FolderErrorProps, FolderErrorEvents, FolderErrorSlots> {
}
export {};

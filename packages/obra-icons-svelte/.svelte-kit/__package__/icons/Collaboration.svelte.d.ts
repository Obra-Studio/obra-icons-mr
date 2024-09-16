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
export type CollaborationProps = typeof __propDef.props;
export type CollaborationEvents = typeof __propDef.events;
export type CollaborationSlots = typeof __propDef.slots;
export default class Collaboration extends SvelteComponentTyped<CollaborationProps, CollaborationEvents, CollaborationSlots> {
}
export {};

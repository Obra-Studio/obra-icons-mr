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
export type ShareFillProps = typeof __propDef.props;
export type ShareFillEvents = typeof __propDef.events;
export type ShareFillSlots = typeof __propDef.slots;
export default class ShareFill extends SvelteComponentTyped<ShareFillProps, ShareFillEvents, ShareFillSlots> {
}
export {};

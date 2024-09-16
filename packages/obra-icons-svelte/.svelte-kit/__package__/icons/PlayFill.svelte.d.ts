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
export type PlayFillProps = typeof __propDef.props;
export type PlayFillEvents = typeof __propDef.events;
export type PlayFillSlots = typeof __propDef.slots;
export default class PlayFill extends SvelteComponentTyped<PlayFillProps, PlayFillEvents, PlayFillSlots> {
}
export {};

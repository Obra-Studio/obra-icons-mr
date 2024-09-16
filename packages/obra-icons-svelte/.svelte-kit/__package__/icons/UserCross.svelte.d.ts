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
export type UserCrossProps = typeof __propDef.props;
export type UserCrossEvents = typeof __propDef.events;
export type UserCrossSlots = typeof __propDef.slots;
export default class UserCross extends SvelteComponentTyped<UserCrossProps, UserCrossEvents, UserCrossSlots> {
}
export {};

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
export type UserFillProps = typeof __propDef.props;
export type UserFillEvents = typeof __propDef.events;
export type UserFillSlots = typeof __propDef.slots;
export default class UserFill extends SvelteComponentTyped<UserFillProps, UserFillEvents, UserFillSlots> {
}
export {};

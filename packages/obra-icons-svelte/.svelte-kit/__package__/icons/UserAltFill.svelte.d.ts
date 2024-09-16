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
export type UserAltFillProps = typeof __propDef.props;
export type UserAltFillEvents = typeof __propDef.events;
export type UserAltFillSlots = typeof __propDef.slots;
export default class UserAltFill extends SvelteComponentTyped<UserAltFillProps, UserAltFillEvents, UserAltFillSlots> {
}
export {};

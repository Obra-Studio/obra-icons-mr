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
export type UserEncircledAltFillProps = typeof __propDef.props;
export type UserEncircledAltFillEvents = typeof __propDef.events;
export type UserEncircledAltFillSlots = typeof __propDef.slots;
export default class UserEncircledAltFill extends SvelteComponentTyped<UserEncircledAltFillProps, UserEncircledAltFillEvents, UserEncircledAltFillSlots> {
}
export {};

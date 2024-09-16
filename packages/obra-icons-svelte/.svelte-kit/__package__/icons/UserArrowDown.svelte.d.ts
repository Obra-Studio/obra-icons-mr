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
export type UserArrowDownProps = typeof __propDef.props;
export type UserArrowDownEvents = typeof __propDef.events;
export type UserArrowDownSlots = typeof __propDef.slots;
export default class UserArrowDown extends SvelteComponentTyped<UserArrowDownProps, UserArrowDownEvents, UserArrowDownSlots> {
}
export {};

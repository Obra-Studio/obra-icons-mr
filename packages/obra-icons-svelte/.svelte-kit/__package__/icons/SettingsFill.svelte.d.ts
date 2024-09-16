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
export type SettingsFillProps = typeof __propDef.props;
export type SettingsFillEvents = typeof __propDef.events;
export type SettingsFillSlots = typeof __propDef.slots;
export default class SettingsFill extends SvelteComponentTyped<SettingsFillProps, SettingsFillEvents, SettingsFillSlots> {
}
export {};

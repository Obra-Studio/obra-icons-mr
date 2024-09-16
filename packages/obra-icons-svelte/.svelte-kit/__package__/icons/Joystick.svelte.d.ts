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
export type JoystickProps = typeof __propDef.props;
export type JoystickEvents = typeof __propDef.events;
export type JoystickSlots = typeof __propDef.slots;
export default class Joystick extends SvelteComponentTyped<JoystickProps, JoystickEvents, JoystickSlots> {
}
export {};

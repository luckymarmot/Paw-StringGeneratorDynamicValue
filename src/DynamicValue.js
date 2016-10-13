import RandExp from 'randexp'

import {
    registerDynamicValueClass,
    InputField
} from './__mocks__/Shims'

@registerDynamicValueClass
export default class RandomStringDV {
    // TODO update static information with correct ones
    // Organisation
    static organisation = 'luckymarmot'
    static repository = 'Paw-StringGeneratorDynamicValue'

    // DynamicValue
    static identifier = 'com.luckymarmot.PawExtensions.StringGeneratorDynamicValue'
    static title = 'Random String'

    static help = 'https://github.com/luckymarmot/Paw-StringGeneratorDynamicValue'

    static inputs = [
        new InputField('regex', 'Regex', 'String', { persisted: true }),
        new InputField(
            'ignoreCase',
            'Ignore case (i)',
            'Checkbox',
            { defaultValue: false, persisted: true }
        ),
        new InputField(
            'multiline',
            'Multiline (m)',
            'Checkbox',
            { defaultValue: false, persisted: true }
        )
    ]

    // args: context, requests, options
    evaluate(context) {
        let modifier = ''
        modifier += this.ignoreCase ? 'i' : ''
        modifier += this.multiline ? 'm' : ''

        return new RandExp(this.regex, modifier).gen()
    }
}

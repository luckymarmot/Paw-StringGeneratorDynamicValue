import {
    UnitTest, registerTest, against, targets, desc
} from '../__utils__/TestUtils'

import {
    ClassMock
} from '../__mocks__/Mocks'

import RandomStringDV from '../DynamicValue'

@registerTest
@against(RandomStringDV)
export class TestRandomStringDV extends UnitTest {

    @targets('evaluate')
    @desc('dummy test')
    testEvaluateCallsGetSchemaDict() {
        const gen = this.__init()

        gen.spyOn('evaluate', () => {
            return 42
        })

        const expected = 42
        const result = gen.evaluate()

        this.assertEqual(gen.spy.evaluate.count, 1)
        this.assertEqual(expected, result)
    }

    @targets('evaluate')
    @desc('tests starting with underscore are ignored')
    @desc('@desc decorator is optional, if not used, the name of the func ' +
          'will be used instead')
    _testEvaluateCallsMaterializeSchemas() {
        // should fail if test is not ignored
        this.assertTrue(false)
    }

    __init() {
        const gen = new ClassMock(new RandomStringDV())
        return gen
    }
}

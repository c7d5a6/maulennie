import { TestBed } from '@angular/core/testing';

import { ConvertService } from './convert.service';

describe('ConvertService', () => {
  let service: ConvertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Галосные і, ы', () => {
    describe('Галосны i ў пачатку слова ў формах займеннікаў вымаўляецца як спалучэнне нескладовага й з галосным i', () => {
      it('іх', () => {
        expect(service.replaceI('іх')).toEqual('[й]іх');
      });
      it(' іх', () => {
        expect(service.replaceI(' іх')).toEqual(' [й]іх');
      });
      it('.іх', () => {
        expect(service.replaceI('.іх')).toEqual('.[й]іх');
      });
      it('іхні', () => {
        expect(service.replaceI('іхні')).toEqual('[й]іхні');
      });
      it('ім', () => {
        expect(service.replaceI('ім')).toEqual('[й]ім');
      });
      it('іншы', () => {
        expect(service.replaceI('іншы')).toEqual('[й]іншы');
      });
      xit('іголка', () => {
        expect(service.replaceI('іголка')).toEqual('іголка');
      });
      xit('.іголка', () => {
        expect(service.replaceI('.іголка')).toEqual('.іголка');
      });
      xit(' іголка', () => {
        expect(service.replaceI(' іголка')).toEqual(' іголка');
      });
    });
    describe('Галосны i ў сярэдзіне альбо на канцы слова пасля галоснага вымаўляецца як спалучэнне нескладовага й з галосным i', () => {
      it('краіна', () => {
        expect(service.replaceI('краіна')).toEqual('кра[й]іна');
      });
      it('ручаіна', () => {
        expect(service.replaceI('ручаіна')).toEqual('руча[й]іна');
      });
      it('тваіх', () => {
        expect(service.replaceI('тваіх')).toEqual('тва[й]іх');
      });
      it('сваіх', () => {
        expect(service.replaceI('сваіх')).toEqual('сва[й]іх');
      });
      it('у маі', () => {
        expect(service.replaceI('у маі')).toEqual('у ма[й]і');
      });
      it('у родным краі', () => {
        expect(service.replaceI('у родным краі')).toEqual('у родным кра[й]і');
      });
      it('у бярозавым гаі', () => {
        expect(service.replaceI('у бярозавым гаі')).toEqual('у бярозавым га[й]і');
      });
    });
    describe('Пасля слова на галосны, ненаціскны i ў незапазычаных словах вымаўляецца як нескладовы й', () => {
      xit('паслалі да Івана', () => {
        expect(service.replaceI('паслалі да Івана')).toEqual('паслалі да [й]вана');
      });
      xit('вазьмі іголку', () => {
        expect(service.replaceI('вазьмі іголку')).toEqual('вазьмі [й]голку');
      });
      xit('дарога на Івацэвічы', () => {
        expect(service.replaceI('дарога на Івацэвічы')).toEqual('дарога на [й]вацэвічы');
      });
      xit('па іржышчы', () => {
        expect(service.replaceI('па іржышчы')).toEqual('па [й]ржышчы');
      });
      it('прамень іржышча', () => {
        expect(service.replaceI('прамень іржышча')).toEqual('прамень іржышча');
      });
    });
    describe('Злучнік і часціца і пасля слова на галосны вымаўляецца як нескладовы й', () => {
      it('збяруся і пайду', () => {
        expect(service.replaceI('збяруся і пайду')).toEqual('збяруся [й] пайду');
      });
      it('бацька і сын', () => {
        expect(service.replaceI('бацька і сын')).toEqual('бацька [й] сын');
      });
      it('замля і неба', () => {
        expect(service.replaceI('замля і неба')).toEqual('замля [й] неба');
      });
      it('прамень і неба', () => {
        expect(service.replaceI('прамень і неба')).toEqual('прамень і неба');
      });
    });
    describe('Галосны і пасля слоў на цвёрды зычны вымаўляецца як ы', () => {
      it('ён ішоў', () => {
        expect(service.replaceI('ён ішоў')).toEqual('ён [ы]шоў');
      });
      it('голуп і галубка', () => {
        expect(service.replaceI('голуп і галубка')).toEqual('голуп [ы] галубка');
      });
      it('лён і каноплі', () => {
        expect(service.replaceI('лён і каноплі')).toEqual('лён [ы] каноплі');
      });
      it('герб і сцяг', () => {
        expect(service.replaceI('герб і сцяг')).toEqual('герб [ы] сцяг');
      });
      it('без ілюзій', () => {
        expect(service.replaceI('без ілюзій')).toEqual('без [ы]люзій');
      });
      it('прамень і неба', () => {
        expect(service.replaceI('прамень і неба')).toEqual('прамень і неба');
      });
    });
    // Немагчыма выканаць без марфалагічнага аналізу
    xdescribe('Ў складаных словах пасля цвёрдага зычнага галосны і вымаўляецца як ы', () => {
      it('міжінстытуцкі', () => {
        expect(service.replaceI('міжінстытуцкі')).toEqual('між[ы]нстытуцкі');
      });
      it('медінстытут', () => {
        expect(service.replaceI('медінстытут')).toEqual('мед[ы]нстытут');
      });
      it('бортінжынер', () => {
        expect(service.replaceI('бортінжынер')).toEqual('борт[ы]нжынер');
      });
    });
  });
});

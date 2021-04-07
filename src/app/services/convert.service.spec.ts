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
      it('іх -> [й]іх', () => {
        expect(service.replaceI('іх')).toEqual('[й]іх');
      });
      it(' іх ->  [й]іх', () => {
        expect(service.replaceI(' іх')).toEqual(' [й]іх');
      });
      it('.іх -> .[й]іх', () => {
        expect(service.replaceI('.іх')).toEqual('.[й]іх');
      });
      it('іхні -> [й]іхні', () => {
        expect(service.replaceI('іхні')).toEqual('[й]іхні');
      });
      it('ім -> [й]ім', () => {
        expect(service.replaceI('ім')).toEqual('[й]ім');
      });
      it('іншы -> [й]іншы', () => {
        expect(service.replaceI('іншы')).toEqual('[й]іншы');
      });
      xit('іголка -> іголка', () => {
        expect(service.replaceI('іголка')).toEqual('іголка');
      });
      xit('.іголка -> .іголка', () => {
        expect(service.replaceI('.іголка')).toEqual('.іголка');
      });
      xit(' іголка ->  іголка', () => {
        expect(service.replaceI(' іголка')).toEqual(' іголка');
      });
    });
    describe('Галосны i ў сярэдзіне альбо на канцы слова пасля галоснага вымаўляецца як спалучэнне нескладовага й з галосным i', () => {
      it('краіна -> кра[й]іна', () => {
        expect(service.replaceI('краіна')).toEqual('кра[й]іна');
      });
      it('ручаіна -> руча[й]іна', () => {
        expect(service.replaceI('ручаіна')).toEqual('руча[й]іна');
      });
      it('тваіх -> тва[й]іх', () => {
        expect(service.replaceI('тваіх')).toEqual('тва[й]іх');
      });
      it('сваіх -> сва[й]іх', () => {
        expect(service.replaceI('сваіх')).toEqual('сва[й]іх');
      });
      it('у маі -> у ма[й]і', () => {
        expect(service.replaceI('у маі')).toEqual('у ма[й]і');
      });
      it('у родным краі -> у родным кра[й]і', () => {
        expect(service.replaceI('у родным краі')).toEqual('у родным кра[й]і');
      });
      it('у бярозавым гаі -> у бярозавым га[й]і', () => {
        expect(service.replaceI('у бярозавым гаі')).toEqual('у бярозавым га[й]і');
      });
    });
    describe('Пасля слова на галосны, ненаціскны i ў незапазычаных словах вымаўляецца як нескладовы й', () => {
      xit('паслалі да Івана -> паслалі да [й]вана', () => {
        expect(service.replaceI('паслалі да Івана')).toEqual('паслалі да [й]вана');
      });
      xit('вазьмі іголку -> вазьмі [й]голку', () => {
        expect(service.replaceI('вазьмі іголку')).toEqual('вазьмі [й]голку');
      });
      xit('дарога на Івацэвічы -> дарога на [й]вацэвічы', () => {
        expect(service.replaceI('дарога на Івацэвічы')).toEqual('дарога на [й]вацэвічы');
      });
      xit('па іржышчы -> па [й]ржышчы', () => {
        expect(service.replaceI('па іржышчы')).toEqual('па [й]ржышчы');
      });
      it('прамень іржышча -> прамень іржышча', () => {
        expect(service.replaceI('прамень іржышча')).toEqual('прамень іржышча');
      });
    });
    describe('Злучнік і часціца і пасля слова на галосны вымаўляецца як нескладовы й', () => {
      it('збяруся і пайду -> збяруся [й] пайду', () => {
        expect(service.replaceI('збяруся і пайду')).toEqual('збяруся [й] пайду');
      });
      it('бацька і сын -> бацька [й] сын', () => {
        expect(service.replaceI('бацька і сын')).toEqual('бацька [й] сын');
      });
      it('замля і неба -> замля [й] неба', () => {
        expect(service.replaceI('замля і неба')).toEqual('замля [й] неба');
      });
      it('прамень і неба -> прамень і неба', () => {
        expect(service.replaceI('прамень і неба')).toEqual('прамень і неба');
      });
    });
    describe('Галосны і пасля слоў на цвёрды зычны вымаўляецца як ы', () => {
      it('ён ішоў -> ён [ы]шоў', () => {
        expect(service.replaceI('ён ішоў')).toEqual('ён [ы]шоў');
      });
      it('голуп і галубка -> голуп [ы] галубка', () => {
        expect(service.replaceI('голуп і галубка')).toEqual('голуп [ы] галубка');
      });
      it('лён і каноплі -> лён [ы] каноплі', () => {
        expect(service.replaceI('лён і каноплі')).toEqual('лён [ы] каноплі');
      });
      it('герб і сцяг -> герб [ы] сцяг', () => {
        expect(service.replaceI('герб і сцяг')).toEqual('герб [ы] сцяг');
      });
      it('без ілюзій -> без [ы]люзій', () => {
        expect(service.replaceI('без ілюзій')).toEqual('без [ы]люзій');
      });
      it('прамень і неба -> прамень і неба', () => {
        expect(service.replaceI('прамень і неба')).toEqual('прамень і неба');
      });
    });
    // Немагчыма выканаць без марфалагічнага аналізу
    xdescribe('Ў складаных словах пасля цвёрдага зычнага галосны і вымаўляецца як ы', () => {
      it('міжінстытуцкі -> між[ы]нстытуцкі', () => {
        expect(service.replaceI('міжінстытуцкі')).toEqual('між[ы]нстытуцкі');
      });
      it('медінстытут -> мед[ы]нстытут', () => {
        expect(service.replaceI('медінстытут')).toEqual('мед[ы]нстытут');
      });
      it('бортінжынер -> борт[ы]нжынер', () => {
        expect(service.replaceI('бортінжынер')).toEqual('борт[ы]нжынер');
      });
    });
  });
});

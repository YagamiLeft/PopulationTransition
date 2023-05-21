import React, { useCallback, useEffect, useState } from 'react';
import { getPopulationCompositionAPI } from '../../api/population-composition/population-composition.api';
import { getPrefecturesAPI, PrefectureList } from '../../api/prefectures/prefectures.api';
import { CheckboxListComponentProps } from '../../components/organisms/checkbox-list/checkbox-list.component';
import { RadioGroupComponentProps } from '../../components/organisms/radio-group/radio-group.component';
import {
  PopulationCompositionList,
  PopulationTransitionTemplate,
  PopulationTransitionTemplateProps,
} from '../../components/templates/population-transition/population-transition.template';

export const PopulationTransitionPage: React.FC = () => {
  const [prefectureList, setPrefectureList] = useState<PrefectureList[]>([]);
  const [populationCompositionList, setPopulationCompositionList] = useState<PopulationCompositionList[]>([]);
  const [chartDataType, setChartDataType] = useState('総人口');

  const fetchPrefectures = useCallback(async () => {
    getPrefecturesAPI().then((result) => {
      setPrefectureList((prevList) => {
        if (JSON.stringify(prevList) === JSON.stringify(result.result)) {
          return prevList;
        } else {
          return result.result;
        }
      });
    });
  }, []);

  useEffect(() => {
    fetchPrefectures();
  }, [fetchPrefectures]);

  const onChangeCheckbox = async (event: React.ChangeEvent<HTMLInputElement>, label: string) => {
    const isChecked = event.target.checked;
    const [specifyPrefecture] = prefectureList.filter((pref) => pref.prefName === label);
    if (isChecked) {
      getPopulationCompositionAPI(specifyPrefecture.prefCode).then((result) => {
        setPopulationCompositionList([
          ...populationCompositionList,
          {
            prefName: label,
            data: result.result.data,
          },
        ]);
      });
    } else {
      setPopulationCompositionList(
        [...populationCompositionList].filter((cpmposition) => cpmposition.prefName !== label),
      );
    }
  };

  const checkboxComponentProps: CheckboxListComponentProps = {
    labels: prefectureList.map((data) => data.prefName),
    onChangeCheckbox,
  };

  const radioGroupComponentProps: RadioGroupComponentProps = {
    labels: ['総人口', '年少人口', '生産年齢人口', '老年人口'],
    checkedLabel: chartDataType,
    onChangeRadio: (event) => setChartDataType(event.target.value),
  };

  const props: PopulationTransitionTemplateProps = {
    checkboxComponentProps,
    populationCompositionList,
    radioGroupComponentProps,
    chartDataType,
  };
  return <PopulationTransitionTemplate {...props} />;
};

PopulationTransitionPage.whyDidYouRender = true;

'use client';

import { Section, Cell, Image, List, Card, Placeholder, ButtonCell, InlineButtons, Timeline, IconContainer, Input } from '@telegram-apps/telegram-ui';
import { useTranslations } from 'next-intl';
import { Icon32ProfileColoredSquare } from '@telegram-apps/telegram-ui/dist/icons/32/profile_colored_square';
import { Icon28AddCircle } from '@telegram-apps/telegram-ui/dist/icons/28/add_circle';
import { Icon24Chat } from '@telegram-apps/telegram-ui/dist/icons/24/Chat';
import { Icon24Notifications } from '@telegram-apps/telegram-ui/dist/icons/24/Notifications';
import { Icon24QR } from '@telegram-apps/telegram-ui/dist/icons/24/QR';
import { Icon28Chat } from '@telegram-apps/telegram-ui/dist/icons/28/Chat';
import { Icon28Devices } from '@telegram-apps/telegram-ui/dist/icons/28/Devices';
import { Icon28Stats } from '@telegram-apps/telegram-ui/dist/icons/28/Stats';

import { Link } from '@/components/Link/Link';
import { LocaleSwitcher } from '@/components/LocaleSwitcher/LocaleSwitcher';
import { Page } from '@/components/Page';

import tonSvg from './_assets/ton.svg';
import { CardCell } from '@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell';
import { CardChip } from '@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip';
import React from 'react';
import { SectionHeader } from '@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionHeader/SectionHeader';
import { SectionFooter } from '@telegram-apps/telegram-ui/dist/components/Blocks/Section/components/SectionFooter/SectionFooter';
import { InlineButtonsItem } from '@telegram-apps/telegram-ui/dist/components/Blocks/InlineButtons/components/InlineButtonsItem/InlineButtonsItem';
import { TimelineItem } from '@telegram-apps/telegram-ui/dist/components/Blocks/Timeline/components/TimelineItem/TimelineItem';
import '@telegram-apps/telegram-ui/dist/styles.css';

export default function Home() {
  const t = useTranslations('i18n');

  return (
    <Page back={false}>
      <InlineButtons mode="plain">
        <InlineButtonsItem text="Chat">
          <Icon24Chat />
        </InlineButtonsItem>
        <InlineButtonsItem text="Mute">
          <Icon24Notifications />
        </InlineButtonsItem>
        <InlineButtonsItem text="QR">
          <Icon24QR />
        </InlineButtonsItem>
      </InlineButtons>
      <>
        <SectionHeader>
          Благо ❤️ Дарю
        </SectionHeader>
        <SectionHeader large>
          Благо ❤️ Дарю
        </SectionHeader>
      </>
      <>
        <Timeline
          active={2}
          horizontal
        >
          <TimelineItem header="Arrived">
            Yesterday
          </TimelineItem>
          <TimelineItem header="Departed">
            Today
          </TimelineItem>
          <TimelineItem header="In transit">
            Tomorrow
          </TimelineItem>
          <TimelineItem header="Processed to delivery center">
            Next week
          </TimelineItem>
          <TimelineItem header="Shipped">
            Someday
          </TimelineItem>
        </Timeline>
      </>
      <List
        style={{
          background: 'var(--tgui--secondary_bg_color)',
          padding: '40px',
          width: 500
        }}
      >
        <Section
          footer="The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux."
          header="Main Settings"
        >
          <Cell before={<IconContainer><Icon28Chat /></IconContainer>}>
            Chat Settings
          </Cell>
          <Cell before={<IconContainer><Icon28Devices /></IconContainer>}>
            Data and Storage
          </Cell>
          <Cell before={<IconContainer><Icon28Stats /></IconContainer>}>
            Devices
          </Cell>
        </Section>
        <Section
          footer="The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux."
          header="Personal Information"
        >
          <Input
            header="First name"
            placeholder="21 y.o. designer from San Francisco"
          />
          <Input
            header="Last name"
            placeholder="21 y.o. designer from San Francisco"
          />
        </Section>
      </List>
      <div className="HIJtihMA8FHczS02iWF5">
        <Placeholder
          description="Description"
          header="Title"
        >
          <img
            alt="Telegram sticker"
            className="blt0jZBzpxuR4oDhJc8s"
            src="https://xelene.me/telegram.gif"
          />
        </Placeholder>
      </div>

      <Card>
        <React.Fragment key=".0">
          <CardChip readOnly>
            Hot place
          </CardChip>
          <img
            alt="Dog"
            src="https://i.imgur.com/892vhef.jpeg"
            style={{
              display: 'block',
              height: 308,
              objectFit: 'cover',
              width: 254
            }}
          />
          <CardCell
            readOnly
            subtitle="United states"
          >
            New York
          </CardCell>
          <CardChip readOnly>
            Hot place
          </CardChip>
          <img
            alt="Dog"
            src="https://i.imgur.com/892vhef.jpeg"
            style={{
              display: 'block',
              height: 308,
              objectFit: 'cover',
              width: 254
            }}
          />
          <CardCell
            readOnly
            subtitle="United states"
          >
            New York
          </CardCell>
        </React.Fragment>
      </Card>
      <List
        style={{
          background: 'var(--tgui--secondary_bg_color)',
          padding: 10
        }}
      >
        <Section>
          <Cell
            before={<Icon32ProfileColoredSquare />}
            subtitle="Manage ads and payment settings"
          >
            My Ads
          </Cell>
          <ButtonCell before={<Icon28AddCircle />}>
            Create Ad
          </ButtonCell>
        </Section>
      </List>
      <SectionFooter>
        SectionFooter
      </SectionFooter>

    </Page>
  );
}

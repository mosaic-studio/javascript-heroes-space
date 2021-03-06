# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-11-28 19:29
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('webpage', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='JogadoresMultiplayer',
            fields=[
                ('pk_jog_multi', models.AutoField(primary_key=True, serialize=False)),
                ('jogador', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='mult_jogador', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='SalasMultiplayer',
            fields=[
                ('pk_sala', models.AutoField(primary_key=True, serialize=False)),
                ('nome', models.CharField(max_length=50)),
                ('max_jogadores', models.PositiveIntegerField()),
                ('mapa', models.CharField(max_length=50)),
            ],
        ),
        migrations.AddField(
            model_name='jogadoresmultiplayer',
            name='sala',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='mult_sala', to='webpage.SalasMultiplayer'),
        ),
        migrations.AlterUniqueTogether(
            name='jogadoresmultiplayer',
            unique_together=set([('jogador', 'sala')]),
        ),
    ]
